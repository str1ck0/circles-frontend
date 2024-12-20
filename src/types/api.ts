export interface Event {
  id: number;
  title: string;
  start_date: string;
  end_date: string;
  location: string;
  private: boolean;
  latitude: number;
  longitude: number;
  photo_url?: string;
  user_id: number;
}

export interface Circle {
  id: number;
  name: string;
  private: boolean;
  description: string;
  border_color: string;
  photo_url?: string;
}
