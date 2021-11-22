export interface PostPreviewSchema {
  slug: string;
  title: string;
  category?: string;
  createdAt: Date;
}

export interface PostSchema {
  title: string;
  category?: string;
  content: string;
  createdAt: Date;
}
