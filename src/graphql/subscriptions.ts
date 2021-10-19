/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMeeting = /* GraphQL */ `
  subscription OnCreateMeeting {
    onCreateMeeting {
      id
      title
      eventDate
      url
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMeeting = /* GraphQL */ `
  subscription OnUpdateMeeting {
    onUpdateMeeting {
      id
      title
      eventDate
      url
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMeeting = /* GraphQL */ `
  subscription OnDeleteMeeting {
    onDeleteMeeting {
      id
      title
      eventDate
      url
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateSpeaker = /* GraphQL */ `
  subscription OnCreateSpeaker {
    onCreateSpeaker {
      id
      name
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSpeaker = /* GraphQL */ `
  subscription OnUpdateSpeaker {
    onUpdateSpeaker {
      id
      name
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSpeaker = /* GraphQL */ `
  subscription OnDeleteSpeaker {
    onDeleteSpeaker {
      id
      name
      comments {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
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
