'use strict';
function logUser(user) { console.log('event=user_lookup value=%s', String(user).replace(/[\r\n\t]/g, '_')); }
module.exports = { logUser };
