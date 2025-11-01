import { createRenderer } from "solid-js/universal"

declare const SolidNativeRenderer: {
  createNode(name: string): string;
  setProperty(id: string, name: string, value: any): void;
  insertBefore(parentId: string, nodeId: string, anchorId?: string): void;
  isTextElement(id: string): boolean;
  removeChild(parentId: string, nodeId: string): void;
  getParent(id: string): string | null;
  getFirstChild(id: string): string | null;
  getNextSibling(id: string): string | null;
};

type Node = {
  id: string
}

export const {
  render,
  effect,
  memo,
  createComponent,
  createElement,
  createTextNode,
  insertNode,
  insert,
  spread,
  setProp,
  mergeProps,
  use
} = createRenderer<Node>({
  createElement(name) {
    return { id: SolidNativeRenderer.createNode(name) };
  },
  createTextNode(value) {
    const id = SolidNativeRenderer.createNode("ss_text");
    SolidNativeRenderer.setProperty(id, "text", value)
    return { id: id };
  },
  replaceText({ id }, value) {
    SolidNativeRenderer.setProperty(id, "text", value);
  },
  setProperty({ id }, name, value) {
    SolidNativeRenderer.setProperty(id, name, value);
  },
  insertNode({ id: parentId }, { id: nodeId }, anchor) {
    const anchorId = anchor?.id;
    SolidNativeRenderer.insertBefore(parentId, nodeId, anchorId);
  },
  isTextNode({ id }) {
    return SolidNativeRenderer.isTextElement(id);;
  },
  removeNode({ id: parentId }, { id: nodeId }) {
    return SolidNativeRenderer.removeChild(parentId, nodeId);
  },
  getParentNode({ id }) {
    const parentId = SolidNativeRenderer.getParent(id);
    if (parentId) {
      return { id: parentId };
    }
    return undefined;
  },
  getFirstChild({ id }) {
    const firstChildId = SolidNativeRenderer.getFirstChild(id);
    if (firstChildId) {
      return { id: firstChildId };
    }
    return undefined;
  },
  getNextSibling({ id }) {
    const nextSiblingId = SolidNativeRenderer.getNextSibling(id);
    if (nextSiblingId) {
      return { id: nextSiblingId };
    }
    return undefined;
  }
});