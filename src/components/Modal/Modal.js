import React, { Children } from "react";
import { createPortal } from "react-dom";

export function Modal  ({childre}) {
  return createPortal(
    <div className="Modal">
      {Children}
    </div>,
    document.getElementById('modal')
  )
}
