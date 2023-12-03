export interface INoteData {
  title: string;
  tags: ITag[];
  notes: string;
}

export interface ITag {
  id: string;
  label: string;
}

export interface IRawNote {
  id: string;
  title: string;
  tagIds: string[];
  notes: string;
}

export interface IRawNoteData {
  title: string;
  tagIds: string[];
  notes: string;
}

export interface INotedWithTags {
  tags: ITag[];
  id: string;
  title: string;
  tagIds: string[];
  notes: string;
}
