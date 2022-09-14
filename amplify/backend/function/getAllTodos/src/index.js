"use strict";
/* Amplify Params - DO NOT EDIT
    API_LAMBDACONNECTION_GRAPHQLAPIIDOUTPUT
    API_LAMBDACONNECTION_TODOTABLE_ARN
    API_LAMBDACONNECTION_TODOTABLE_NAME
    ENV
    REGION
Amplify Params - DO NOT EDIT */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const client_dynamodb_1 = require("@aws-sdk/client-dynamodb");
const config = {
    endpoint: process.env.API_LAMBDACONNECTION_TODOTABLE_ARN
};
const docClient = new client_dynamodb_1.DynamoDBClient(config);
const handler = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const command = new client_dynamodb_1.ListTablesCommand({});
        console.log(command);
        const client = yield docClient.send(command);
        console.log(client);
        return client;
    }
    catch (err) {
        console.log(err);
    }
});
exports.handler = handler;
(0, exports.handler)();
// import { DynamoDBClient, DynamoDBClientConfig, PutItemCommand, ListTablesCommand, ListTablesCommandOutput, PutItemCommandOutput } from '@aws-sdk/client-dynamodb'
// import { AppSyncResolverHandler } from "aws-lambda";
// const config: DynamoDBClientConfig = {
//   endpoint: process.env.STORAGE_LAMBDACONNECTION_NAME
// }
// const docClient = new DynamoDBClient(config)
// type Todo = {
//     id: string
//     name: string
//     descirption: string
// }
// export const handler: AppSyncResolverHandler<Todo , PutItemCommandOutput | undefined> = async (event) => {
//   try {
//     const command = new PutItemCommand({
//         TableName: 'Todo',
//         Item: {
//             name: {S: event.arguments.name},
//             description: {S: event.arguments.descirption}
//         }
//     })
//     console.log(command);
//     const client = await docClient.send(command)
//     console.log(client);
//     return client
//   } catch (err) {
//     console.log(err);
//   }
// };
