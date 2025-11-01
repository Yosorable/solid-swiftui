import { type JSX as SolidJSX } from "solid-js"

export type SolidSwiftUIElement = JSX.Element

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [name: string]: Record<string, unknown>
    }

    type Element = SolidJSX.Element

    interface ElementChildrenAttribute {
      children?: unknown
    }
  }
}