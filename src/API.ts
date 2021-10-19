/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMeetingInput = {
  id?: string | null,
  title: string,
  eventDate: string,
  url: string,
};

export type ModelMeetingConditionInput = {
  title?: ModelStringInput | null,
  eventDate?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelMeetingConditionInput | null > | null,
  or?: Array< ModelMeetingConditionInput | null > | null,
  not?: ModelMeetingConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Meeting = {
  __typename: "Meeting",
  id: string,
  title: string,
  eventDate: string,
  url: string,
  comments?: ModelCommentConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCommentConnection = {
  __typename: "ModelCommentConnection",
  items?:  Array<Comment | null > | null,
  nextToken?: string | null,
};

export type Comment = {
  __typename: "Comment",
  id: string,
  meetingId: string,
  speakerId: string,
  voiceNo: number,
  words: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateMeetingInput = {
  id: string,
  title?: string | null,
  eventDate?: string | null,
  url?: string | null,
};

export type DeleteMeetingInput = {
  id: string,
};

export type CreateSpeakerInput = {
  id?: string | null,
  name: string,
};

export type ModelSpeakerConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelSpeakerConditionInput | null > | null,
  or?: Array< ModelSpeakerConditionInput | null > | null,
  not?: ModelSpeakerConditionInput | null,
};

export type Speaker = {
  __typename: "Speaker",
  id: string,
  name: string,
  comments?: ModelCommentConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateSpeakerInput = {
  id: string,
  name?: string | null,
};

export type DeleteSpeakerInput = {
  id: string,
};

export type CreateCommentInput = {
  id?: string | null,
  meetingId: string,
  speakerId: string,
  voiceNo: number,
  words: string,
};

export type ModelCommentConditionInput = {
  meetingId?: ModelIDInput | null,
  speakerId?: ModelIDInput | null,
  voiceNo?: ModelIntInput | null,
  words?: ModelStringInput | null,
  and?: Array< ModelCommentConditionInput | null > | null,
  or?: Array< ModelCommentConditionInput | null > | null,
  not?: ModelCommentConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCommentInput = {
  id: string,
  meetingId?: string | null,
  speakerId?: string | null,
  voiceNo?: number | null,
  words?: string | null,
};

export type DeleteCommentInput = {
  id: string,
};

export type ModelMeetingFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  eventDate?: ModelStringInput | null,
  url?: ModelStringInput | null,
  and?: Array< ModelMeetingFilterInput | null > | null,
  or?: Array< ModelMeetingFilterInput | null > | null,
  not?: ModelMeetingFilterInput | null,
};

export type ModelMeetingConnection = {
  __typename: "ModelMeetingConnection",
  items?:  Array<Meeting | null > | null,
  nextToken?: string | null,
};

export type ModelSpeakerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelSpeakerFilterInput | null > | null,
  or?: Array< ModelSpeakerFilterInput | null > | null,
  not?: ModelSpeakerFilterInput | null,
};

export type ModelSpeakerConnection = {
  __typename: "ModelSpeakerConnection",
  items?:  Array<Speaker | null > | null,
  nextToken?: string | null,
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null,
  meetingId?: ModelIDInput | null,
  speakerId?: ModelIDInput | null,
  voiceNo?: ModelIntInput | null,
  words?: ModelStringInput | null,
  and?: Array< ModelCommentFilterInput | null > | null,
  or?: Array< ModelCommentFilterInput | null > | null,
  not?: ModelCommentFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateMeetingMutationVariables = {
  input: CreateMeetingInput,
  condition?: ModelMeetingConditionInput | null,
};

export type CreateMeetingMutation = {
  createMeeting?:  {
    __typename: "Meeting",
    id: string,
    title: string,
    eventDate: string,
    url: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateMeetingMutationVariables = {
  input: UpdateMeetingInput,
  condition?: ModelMeetingConditionInput | null,
};

export type UpdateMeetingMutation = {
  updateMeeting?:  {
    __typename: "Meeting",
    id: string,
    title: string,
    eventDate: string,
    url: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteMeetingMutationVariables = {
  input: DeleteMeetingInput,
  condition?: ModelMeetingConditionInput | null,
};

export type DeleteMeetingMutation = {
  deleteMeeting?:  {
    __typename: "Meeting",
    id: string,
    title: string,
    eventDate: string,
    url: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateSpeakerMutationVariables = {
  input: CreateSpeakerInput,
  condition?: ModelSpeakerConditionInput | null,
};

export type CreateSpeakerMutation = {
  createSpeaker?:  {
    __typename: "Speaker",
    id: string,
    name: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateSpeakerMutationVariables = {
  input: UpdateSpeakerInput,
  condition?: ModelSpeakerConditionInput | null,
};

export type UpdateSpeakerMutation = {
  updateSpeaker?:  {
    __typename: "Speaker",
    id: string,
    name: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteSpeakerMutationVariables = {
  input: DeleteSpeakerInput,
  condition?: ModelSpeakerConditionInput | null,
};

export type DeleteSpeakerMutation = {
  deleteSpeaker?:  {
    __typename: "Speaker",
    id: string,
    name: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: CreateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "Comment",
    id: string,
    meetingId: string,
    speakerId: string,
    voiceNo: number,
    words: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: UpdateCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "Comment",
    id: string,
    meetingId: string,
    speakerId: string,
    voiceNo: number,
    words: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: DeleteCommentInput,
  condition?: ModelCommentConditionInput | null,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "Comment",
    id: string,
    meetingId: string,
    speakerId: string,
    voiceNo: number,
    words: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetMeetingQueryVariables = {
  id: string,
};

export type GetMeetingQuery = {
  getMeeting?:  {
    __typename: "Meeting",
    id: string,
    title: string,
    eventDate: string,
    url: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListMeetingsQueryVariables = {
  filter?: ModelMeetingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMeetingsQuery = {
  listMeetings?:  {
    __typename: "ModelMeetingConnection",
    items?:  Array< {
      __typename: "Meeting",
      id: string,
      title: string,
      eventDate: string,
      url: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSpeakerQueryVariables = {
  id: string,
};

export type GetSpeakerQuery = {
  getSpeaker?:  {
    __typename: "Speaker",
    id: string,
    name: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListSpeakersQueryVariables = {
  filter?: ModelSpeakerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSpeakersQuery = {
  listSpeakers?:  {
    __typename: "ModelSpeakerConnection",
    items?:  Array< {
      __typename: "Speaker",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  id: string,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "Comment",
    id: string,
    meetingId: string,
    speakerId: string,
    voiceNo: number,
    words: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommentsQueryVariables = {
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentsQuery = {
  listComments?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      meetingId: string,
      speakerId: string,
      voiceNo: number,
      words: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListCommentByMeetingIdQueryVariables = {
  meetingId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentByMeetingIdQuery = {
  listCommentByMeetingId?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      meetingId: string,
      speakerId: string,
      voiceNo: number,
      words: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListCommentBySpeakerIdQueryVariables = {
  speakerId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCommentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommentBySpeakerIdQuery = {
  listCommentBySpeakerId?:  {
    __typename: "ModelCommentConnection",
    items?:  Array< {
      __typename: "Comment",
      id: string,
      meetingId: string,
      speakerId: string,
      voiceNo: number,
      words: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateMeetingSubscription = {
  onCreateMeeting?:  {
    __typename: "Meeting",
    id: string,
    title: string,
    eventDate: string,
    url: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateMeetingSubscription = {
  onUpdateMeeting?:  {
    __typename: "Meeting",
    id: string,
    title: string,
    eventDate: string,
    url: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteMeetingSubscription = {
  onDeleteMeeting?:  {
    __typename: "Meeting",
    id: string,
    title: string,
    eventDate: string,
    url: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateSpeakerSubscription = {
  onCreateSpeaker?:  {
    __typename: "Speaker",
    id: string,
    name: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateSpeakerSubscription = {
  onUpdateSpeaker?:  {
    __typename: "Speaker",
    id: string,
    name: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteSpeakerSubscription = {
  onDeleteSpeaker?:  {
    __typename: "Speaker",
    id: string,
    name: string,
    comments?:  {
      __typename: "ModelCommentConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommentSubscription = {
  onCreateComment?:  {
    __typename: "Comment",
    id: string,
    meetingId: string,
    speakerId: string,
    voiceNo: number,
    words: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommentSubscription = {
  onUpdateComment?:  {
    __typename: "Comment",
    id: string,
    meetingId: string,
    speakerId: string,
    voiceNo: number,
    words: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommentSubscription = {
  onDeleteComment?:  {
    __typename: "Comment",
    id: string,
    meetingId: string,
    speakerId: string,
    voiceNo: number,
    words: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
