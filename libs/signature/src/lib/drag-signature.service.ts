import {DraggableSignature} from "./signature-models";
import { Injectable } from "@angular/core";

@Injectable()
export class DragSignatureService {
  public sign: DraggableSignature;

  constructor() {
  }
}
