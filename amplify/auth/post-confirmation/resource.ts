// Import the 'defineFunction' utility from the '@aws-amplify/backend' module.
// This utility is used to define AWS Lambda functions in an Amplify project.
import { defineFunction } from '@aws-amplify/backend';

// Export a function named 'postConfirmation'. 
// The 'defineFunction' method is used to define the function's behavior and properties.
// This is creating a new Lambda function to be triggered after user confirmation (usually after signup).
// The function is given a specific name, 'post-confirmation', and can be used within Amplify's backend configuration.
export const postConfirmation = defineFunction({
  name: 'post-confirmation',  // The name of the Lambda function. This name is used internally in the AWS Amplify project.
});
