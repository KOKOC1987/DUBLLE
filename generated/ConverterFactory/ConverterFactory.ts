// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class NewConverter extends EthereumEvent {
  get params(): NewConverter__Params {
    return new NewConverter__Params(this);
  }
}

export class NewConverter__Params {
  _event: NewConverter;

  constructor(event: NewConverter) {
    this._event = event;
  }

  get _converter(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ConverterFactory extends SmartContract {
  static bind(address: Address): ConverterFactory {
    return new ConverterFactory("ConverterFactory", address);
  }

  createConverter(
    _token: Address,
    _registry: Address,
    _maxConversionFee: BigInt,
    _reserveToken: Address,
    _reserveRatio: BigInt
  ): Address {
    let result = super.call("createConverter", [
      EthereumValue.fromAddress(_token),
      EthereumValue.fromAddress(_registry),
      EthereumValue.fromUnsignedBigInt(_maxConversionFee),
      EthereumValue.fromAddress(_reserveToken),
      EthereumValue.fromUnsignedBigInt(_reserveRatio)
    ]);

    return result[0].toAddress();
  }

  try_createConverter(
    _token: Address,
    _registry: Address,
    _maxConversionFee: BigInt,
    _reserveToken: Address,
    _reserveRatio: BigInt
  ): CallResult<Address> {
    let result = super.tryCall("createConverter", [
      EthereumValue.fromAddress(_token),
      EthereumValue.fromAddress(_registry),
      EthereumValue.fromUnsignedBigInt(_maxConversionFee),
      EthereumValue.fromAddress(_reserveToken),
      EthereumValue.fromUnsignedBigInt(_reserveRatio)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }
}

export class CreateConverterCall extends EthereumCall {
  get inputs(): CreateConverterCall__Inputs {
    return new CreateConverterCall__Inputs(this);
  }

  get outputs(): CreateConverterCall__Outputs {
    return new CreateConverterCall__Outputs(this);
  }
}

export class CreateConverterCall__Inputs {
  _call: CreateConverterCall;

  constructor(call: CreateConverterCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _registry(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _maxConversionFee(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _reserveToken(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _reserveRatio(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }
}

export class CreateConverterCall__Outputs {
  _call: CreateConverterCall;

  constructor(call: CreateConverterCall) {
    this._call = call;
  }

  get converterAddress(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}