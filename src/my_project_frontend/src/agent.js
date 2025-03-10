import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory as backendIdl, canisterId as backendCanisterId } from "../../declarations/my_project_backend/my_project_backend.did.js";


const agent = new HttpAgent();yang
const my_project_backend = Actor.createActor(idlFactory, {
  agent,
  canisterId,
});

export { my_project_backend };
