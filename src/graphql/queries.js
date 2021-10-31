/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMeeting = /* GraphQL */ `
  query GetMeeting($id: ID!) {
    getMeeting(id: $id) {
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
export const listMeetings = /* GraphQL */ `
  query ListMeetings(
    $filter: ModelMeetingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMeetings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getSpeaker = /* GraphQL */ `
  query GetSpeaker($id: ID!) {
    getSpeaker(id: $id) {
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
export const listSpeakers = /* GraphQL */ `
  query ListSpeakers(
    $filter: ModelSpeakerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpeakers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        position
        comments {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const listCommentByMeetingId = /* GraphQL */ `
  query ListCommentByMeetingId(
    $meetingId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentByMeetingId(
      meetingId: $meetingId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const listCommentBySpeakerId = /* GraphQL */ `
  query ListCommentBySpeakerId(
    $speakerId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommentBySpeakerId(
      speakerId: $speakerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
