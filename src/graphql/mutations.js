/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMeeting = /* GraphQL */ `
  mutation CreateMeeting(
    $input: CreateMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    createMeeting(input: $input, condition: $condition) {
      id
      title
      eventDate
      url
      comments {
        items {
          id
          meetingId
          speakerId
          voiceNo
          words
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateMeeting = /* GraphQL */ `
  mutation UpdateMeeting(
    $input: UpdateMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    updateMeeting(input: $input, condition: $condition) {
      id
      title
      eventDate
      url
      comments {
        items {
          id
          meetingId
          speakerId
          voiceNo
          words
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteMeeting = /* GraphQL */ `
  mutation DeleteMeeting(
    $input: DeleteMeetingInput!
    $condition: ModelMeetingConditionInput
  ) {
    deleteMeeting(input: $input, condition: $condition) {
      id
      title
      eventDate
      url
      comments {
        items {
          id
          meetingId
          speakerId
          voiceNo
          words
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createSpeaker = /* GraphQL */ `
  mutation CreateSpeaker(
    $input: CreateSpeakerInput!
    $condition: ModelSpeakerConditionInput
  ) {
    createSpeaker(input: $input, condition: $condition) {
      id
      name
      position
      comments {
        items {
          id
          meetingId
          speakerId
          voiceNo
          words
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateSpeaker = /* GraphQL */ `
  mutation UpdateSpeaker(
    $input: UpdateSpeakerInput!
    $condition: ModelSpeakerConditionInput
  ) {
    updateSpeaker(input: $input, condition: $condition) {
      id
      name
      position
      comments {
        items {
          id
          meetingId
          speakerId
          voiceNo
          words
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteSpeaker = /* GraphQL */ `
  mutation DeleteSpeaker(
    $input: DeleteSpeakerInput!
    $condition: ModelSpeakerConditionInput
  ) {
    deleteSpeaker(input: $input, condition: $condition) {
      id
      name
      position
      comments {
        items {
          id
          meetingId
          speakerId
          voiceNo
          words
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
      id
      meetingId
      speakerId
      voiceNo
      words
      createdAt
      updatedAt
    }
  }
`;
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
      id
      meetingId
      speakerId
      voiceNo
      words
      createdAt
      updatedAt
    }
  }
`;
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
      id
      meetingId
      speakerId
      voiceNo
      words
      createdAt
      updatedAt
    }
  }
`;
