export type DiscourseUser = {
  id: number;
  username: string;
  name: string;
  avatar_template: string;
  title?: string;
};

export type DirectoryItem = {
  id: number;
  likes_received: number;
  likes_given: number;
  topics_entered: number;
  topic_count: number;
  post_count: number;
  posts_read: number;
  days_visited: number;
  user: DiscourseUser;
};

export type DiscourseDirectoryResponse = {
  directory_items: DirectoryItem[];
  meta: {
    last_updated_at: string;
    total_rows_directory_items: number;
    load_more_directory_items: string;
  };
};
