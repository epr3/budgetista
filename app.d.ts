/// <reference types="lucia" />
declare namespace Lucia {
  type Auth = import("./lucia.js").Auth;
  type DatabaseUserAttributes = {
    email: string;
    nickname: string;
  };
  type DatabaseSessionAttributes = {};
}
