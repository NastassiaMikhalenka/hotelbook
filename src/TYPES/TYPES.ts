import Any = jasmine.Any;

export type HotelType = {
    address: string
    amenities: Array<any>
    ancestors: Array<any>
    autobroaden_label: string
    autobroaden_type: string
    awards: Array<any>
    bearing: string
    business_listings: any
    description: string
    distance: string
    distance_string: null
    email: string
    guide_count: string
    has_panoramic_photos: boolean
    has_review_draft: boolean
    hotel_class: string
    hotel_class_attribution: string
    is_candidate_for_contact_info_suppression: boolean
    is_closed: boolean
    is_jfy_enabled: boolean
    is_long_closed: boolean
    latitude: string
    listing_key: string
    local_address: string
    local_name: string
    location_id: string
    location_string: string
    longitude: string
    name: string
    nearest_metro_station: []
    num_reviews: string
    owner_website: string
    parent_display_name: string
    phone: string
    photo: PhotoType
    photo_count: string
    preferred_map_engine: string
    price: string
    price_level: string
    ranking: string
    ranking_category: string
    ranking_denominator: string
    ranking_geo: string
    ranking_geo_id: string
    ranking_position: string
    rating: string
    rating_histogram: any
    raw_ranking: string
    room_tips: Array<any>
    special_offers: any
    subcategory: Array<any>
    subcategory_type: string
    subcategory_type_label: string
    timezone: string
    web_url: string
    website: string
    write_review: string
}

export type PhotoType = {
    caption: string
    helpful_votes: string
    id: string
    images: ImagesType
    is_blessed: true
    published_date: string
    uploaded_date: string
    user: any
}

type ImagesType = {
    large: ImgType
    medium: ImgType
    original: ImgType
    small: ImgType
    thumbnail: ImgType
}

type ImgType = {
    height: string
    url: string
    width: string
}
