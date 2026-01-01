export interface ISearchMetadata {
    id: string;
    status: string;
    json_endpoint: string;
    created_at: string;
    processed_at: string;
    google_maps_reviews_url: string;
    raw_html_file: string;
    prettify_html_file: string;
    total_time_taken: number;
}

export interface ISearchParameters {
    engine: string;
    place_id: string;
    hl: string;
    sort_by: string;
}

export interface IPlaceInfo {
    title: string;
    address: string;
    rating: number;
    reviews: number;
    type: string;
}

export interface IWebUser {
    name: string;
    link: string;
    contributor_id: string;
    thumbnail: string;
    local_guide: boolean;
    reviews: number;
    photos: number;
}

export interface IExtractedSnippet {
    original: string;
}

export interface IReviewDetails {
    food?: number;
    service?: number;
    atmosphere?: number;
    meal_type?: string;
    price_per_person?: string;
    group_size?: string;
    seating_type?: string;
}

export interface IReview {
    link: string;
    rating: number;
    date: string;
    iso_date: string;
    iso_date_of_last_edit?: string;
    images?: string[];
    source: string;
    review_id: string;
    user: IWebUser;
    snippet?: string;
    extracted_snippet?: IExtractedSnippet;
    details?: IReviewDetails;
}

export interface ISerpapiPagination {
    next: string;
    next_page_token: string;
}

export interface IReviewsData {
    search_metadata: ISearchMetadata;
    search_parameters: ISearchParameters;
    place_info: IPlaceInfo;
    reviews: IReview[];
    serpapi_pagination: ISerpapiPagination;
}
