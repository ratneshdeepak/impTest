'use strict';

module.exports.AgentRuntimeError = class AgentRuntimeError extends Error {};
module.exports.DeviceDisconnectedError = class DeviceDisconnectedError extends Error {};
module.exports.DeviceError = class DeviceError extends Error {};
module.exports.DevicePowerstateError = class DevicePowerstateError extends Error {};
module.exports.DeviceRuntimeError = class DeviceRuntimeError extends Error {};
module.exports.SessionFailedError = class SessionFailedError extends Error {};
module.exports.TestMethodError = class TestMethodError extends Error {};
module.exports.TestStateError = class TestStateError extends Error {};
module.exports.WrongModelError = class WrongModelError extends Error {};
module.exports.SessionStartTimeoutError = class SessionStartTimeoutError extends Error {};
module.exports.SesstionTestMessagesTimeoutError = class SesstionTestMessagesTimeoutError extends Error {};
