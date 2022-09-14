/* Amplify Params - DO NOT EDIT
	API_LAMBDACONNECTION_GRAPHQLAPIIDOUTPUT
	API_LAMBDACONNECTION_TODOTABLE_ARN
	API_LAMBDACONNECTION_TODOTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

export const handler = async () => {
  console.log('Hello World');

  return {
      statusCode: 200,
      body: JSON.stringify({
          message: 'Hello World'
      })
  };
}

// import { DynamoDBClient, DynamoDBClientConfig, ListTablesCommand, ListTablesCommandOutput } from '@aws-sdk/client-dynamodb'

// const config: DynamoDBClientConfig = {
//   endpoint: process.env.API_LAMBDACONNECTION_TODOTABLE_ARN

// }
// const docClient = new DynamoDBClient(config)


// export const handler = async (): Promise<ListTablesCommandOutput | undefined> => {
//   try {
//     const command = new ListTablesCommand({})
//     console.log(command);
//     const client = await docClient.send(command)
//     console.log(client);
//     return client
//   } catch (err) {
//     console.log(err);
//   }
// };

// handler()

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