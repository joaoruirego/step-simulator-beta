import { animateEmissiveColor } from "../animations/animmate-emissive-color";
import { assignCanvasToMesh } from "./assign-canvas-to-mesh";
import { loadCanvasFromMesh } from "./load-canvas-from-mesh";
import * as THREE from "three";

export function setEditingComponent(
  editingComponent,
  clickedMesh,
  fabricTexture,
  fabricCanvas,
  updateTexture,
  setEditingComponentName,
  animate,
  canvasSize
) {
  editingComponent.current = clickedMesh;
  if (!editingComponent.current) return;
  if (animate) animateEmissiveColor(editingComponent.current, 400);
  if (!editingComponent.current.userData.canvas)
    assignCanvasToMesh(editingComponent.current, canvasSize);
  setTimeout(() => {
    loadCanvasFromMesh(
      editingComponent.current,
      fabricTexture,
      fabricCanvas,
      updateTexture
    );
    if (editingComponent.current.material)
      editingComponent.current.material.map = fabricTexture;
  }, 0);
  setEditingComponentName(editingComponent.current.name);
}
