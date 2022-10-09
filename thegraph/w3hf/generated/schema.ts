// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class CandidateAccepted extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CandidateAccepted entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CandidateAccepted must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CandidateAccepted", id.toString(), this);
    }
  }

  static load(id: string): CandidateAccepted | null {
    return changetype<CandidateAccepted | null>(
      store.get("CandidateAccepted", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get candidateId(): Bytes {
    let value = this.get("candidateId");
    return value!.toBytes();
  }

  set candidateId(value: Bytes) {
    this.set("candidateId", Value.fromBytes(value));
  }
}

export class CandidateNominated extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CandidateNominated entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CandidateNominated must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CandidateNominated", id.toString(), this);
    }
  }

  static load(id: string): CandidateNominated | null {
    return changetype<CandidateNominated | null>(
      store.get("CandidateNominated", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get candidateId(): Bytes {
    let value = this.get("candidateId");
    return value!.toBytes();
  }

  set candidateId(value: Bytes) {
    this.set("candidateId", Value.fromBytes(value));
  }

  get twitterId(): string {
    let value = this.get("twitterId");
    return value!.toString();
  }

  set twitterId(value: string) {
    this.set("twitterId", Value.fromString(value));
  }

  get ipfsCid(): Bytes {
    let value = this.get("ipfsCid");
    return value!.toBytes();
  }

  set ipfsCid(value: Bytes) {
    this.set("ipfsCid", Value.fromBytes(value));
  }
}

export class VotedForCandidate extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save VotedForCandidate entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type VotedForCandidate must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("VotedForCandidate", id.toString(), this);
    }
  }

  static load(id: string): VotedForCandidate | null {
    return changetype<VotedForCandidate | null>(
      store.get("VotedForCandidate", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get candidateId(): Bytes {
    let value = this.get("candidateId");
    return value!.toBytes();
  }

  set candidateId(value: Bytes) {
    this.set("candidateId", Value.fromBytes(value));
  }

  get voter(): Bytes {
    let value = this.get("voter");
    return value!.toBytes();
  }

  set voter(value: Bytes) {
    this.set("voter", Value.fromBytes(value));
  }
}