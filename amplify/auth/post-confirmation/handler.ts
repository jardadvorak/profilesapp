// Importing a type definition called 'PostConfirmationTriggerHandler' from the 'aws-lambda' package.
// This type is specifically used for AWS Lambda triggers related to the Post Confirmation event in Cognito.
// It provides TypeScript type safety, ensuring the 'handler' function follows the structure expected for this type of event.
import type { PostConfirmationTriggerHandler } from "aws-lambda";

// Define and export a Lambda function called 'handler'.
// The function is explicitly typed as 'PostConfirmationTriggerHandler', which means it handles
// Cognito Post Confirmation events (events triggered when a user confirms their signup).
export const handler: PostConfirmationTriggerHandler = async (event) => {
  
  // The function receives an 'event' object as an argument, which contains details
  // about the Cognito user and the confirmation event that triggered this Lambda function.
  
  // In this case, the function is simply returning the 'event' object unchanged.
  // This can be expanded later to perform actions like logging, user database updates, etc.
  return event;
};
