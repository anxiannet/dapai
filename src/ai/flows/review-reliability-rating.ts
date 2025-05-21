// 'use server';

/**
 * @fileOverview An AI agent that provides a reliability rating for service providers based on user reviews.
 *
 * - reviewReliabilityRating - A function that processes reviews and returns a reliability rating.
 * - ReviewReliabilityRatingInput - The input type for the reviewReliabilityRating function.
 * - ReviewReliabilityRatingOutput - The return type for the reviewReliabilityRating function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ReviewReliabilityRatingInputSchema = z.object({
  reviews: z.array(
    z.string().describe('A review of the service provider.')
  ).describe('An array of reviews for a service provider.'),
});
export type ReviewReliabilityRatingInput = z.infer<typeof ReviewReliabilityRatingInputSchema>;

const ReviewReliabilityRatingOutputSchema = z.object({
  reliabilityRating: z.number().describe('A numerical rating (0-1) representing the reliability of the service provider, derived from the reviews.'),
  summary: z.string().describe('A summary of the feedback themes from the reviews.'),
});
export type ReviewReliabilityRatingOutput = z.infer<typeof ReviewReliabilityRatingOutputSchema>;

export async function reviewReliabilityRating(input: ReviewReliabilityRatingInput): Promise<ReviewReliabilityRatingOutput> {
  return reviewReliabilityRatingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'reviewReliabilityRatingPrompt',
  input: {schema: ReviewReliabilityRatingInputSchema},
  output: {schema: ReviewReliabilityRatingOutputSchema},
  prompt: `You are an AI expert in analyzing user reviews to determine the reliability of service providers.

  Given the following reviews, provide a reliability rating between 0 and 1, where 0 is completely unreliable and 1 is completely reliable. Also, provide a summary of the feedback themes from the reviews.

  Reviews:
  {{#each reviews}}
  - {{{this}}}
  {{/each}}
  `,
});

const reviewReliabilityRatingFlow = ai.defineFlow(
  {
    name: 'reviewReliabilityRatingFlow',
    inputSchema: ReviewReliabilityRatingInputSchema,
    outputSchema: ReviewReliabilityRatingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
