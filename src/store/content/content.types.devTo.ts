export type TDevToArticle = {
  canonical_url: string;
  collection_id: any;
  comments_count: number;
  cover_image: string;
  created_at: string;
  crossposted_at: any;
  description: string;
  edited_at: any;
  id: number;
  last_comment_at: string;
  path: string;
  positive_reactions_count: number;
  public_reactions_count: number;
  published_at: string;
  published_timestamp: string;
  readable_publish_date: string;
  reading_time_minutes: string;
  slug: string;
  social_image: string;
  tag_list: string[];
  tags: string;
  title: string;
  type_of: string;
  url: string;
  user: {
    github_username: string;
    name: string;
    profile_image: string;
    profile_image_90: string;
    twitter_username: string | null;
    user_id: number;
    username: string;
    website_url: string;
  };
};
