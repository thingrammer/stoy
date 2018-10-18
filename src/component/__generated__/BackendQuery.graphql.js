/**
 * @flow
 * @relayHash 8a2d652f2c03b0e05df80b404a3358fb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type BackendQueryVariables = {||};
export type BackendQueryResponse = {|
  +viewer: ?{|
    +id: string
  |}
|};
export type BackendQuery = {|
  variables: BackendQueryVariables,
  response: BackendQueryResponse,
|};
*/


/*
query BackendQuery {
  viewer {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "viewer",
    "storageKey": null,
    "args": null,
    "concreteType": "User",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "BackendQuery",
  "id": null,
  "text": "query BackendQuery {\n  viewer {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "BackendQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "BackendQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a7b970da5e392c46b97c110e2e459cc2';
module.exports = node;
