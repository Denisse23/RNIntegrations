export interface PropertiesListResponse {
  search_radius: number;
  copyright: string[];
  room_distribution: RoomDistribution[];
  count: number;
  unfiltered_primary_count: number;
  page_loading_threshold: number;
  b_max_los_data: BMaxLosData;
  base_filters: BaseFilter[];
  applied_filters: any[];
  ranking_version: number;
  result: Property[];
  extended_count: number;
  has_low_availability: string;
  unfiltered_count: number;
  map_bounding_box: MapBoundingBox;
  sorting: Sorting;
  search_id: string;
  sort: Sort[];
  primary_count: number;
  search_metadata: string;
  recommended_filters: RecommendedFilter[];
  is_beach_ufi: number;
  total_count_with_filters: number;
}

export interface RoomDistribution {
  adults: string;
  children: number[];
}

export interface BMaxLosData {
  extended_los: number;
  experiment: string;
  max_allowed_los: number;
  is_fullon: number;
  has_extended_los: number;
  default_los: number;
}

export interface BaseFilter {
  iconfont?: string;
  id: string;
  any_text?: string;
  irene_resp_id: string;
  is_group: number;
  categories: Category[];
  type: string;
  layout: Layout;
  title: string;
  subtitle: string;
  experiment_tracking_data?: ExperimentTrackingData2;
}

export interface Category {
  style_for_count: number;
  display_format?: string;
  selected: number;
  name: string;
  to?: number;
  id: string;
  from?: number;
  count: number;
  popular_rank?: number;
  popular?: number;
  experiment_tracking_data?: ExperimentTrackingData;
}

export interface ExperimentTrackingData {
  track_on_select: TrackOnSelect[];
  track_on_deselect?: TrackOnDeselect[];
  track_on_view?: TrackOnView[];
}

export interface TrackOnSelect {
  value: number;
  type: number;
  experiment_tag: string;
}

export interface TrackOnDeselect {
  type: number;
  experiment_tag: string;
  value: number;
}

export interface TrackOnView {
  value: number;
  type: number;
  experiment_tag: string;
}

export interface Layout {
  is_collapsed: number;
  is_collapsable: number;
  collapsed_count: number;
}

export interface ExperimentTrackingData2 {
  track_on_view: TrackOnView2[];
}

export interface TrackOnView2 {
  value: number;
  type: number;
  experiment_tag: string;
}

export interface Property {
  genius_discount_percentage: number;
  main_photo_id: number;
  default_wishlist_name: string;
  cc_required: number;
  review_score_word: string;
  min_total_price: number;
  type: string;
  extended: number;
  selected_review_topic: any;
  block_ids: string[];
  cc1: string;
  in_best_district: number;
  accommodation_type: number;
  price_breakdown: PriceBreakdown;
  native_ads_cpc: number;
  wishlist_count: number;
  is_city_center: number;
  city_trans: string;
  matching_units_configuration: MatchingUnitsConfiguration;
  hotel_id: number;
  mobile_discount_percentage: number;
  review_score: number;
  hotel_has_vb_boost: number;
  preferred: number;
  is_geo_rate: any;
  checkin: Checkin;
  url: string;
  is_mobile_deal: number;
  class: number;
  bwallet: Bwallet;
  accommodation_type_name: string;
  review_nr: number;
  is_free_cancellable: number;
  ufi: number;
  urgency_room_c: number;
  city_name_en: string;
  children_not_allowed: number;
  native_ad_id: string;
  updated_checkout: any;
  currency_code: string;
  district_id: number;
  default_language: string;
  hotel_name: string;
  city: string;
  countrycode: string;
  is_smart_deal: number;
  updated_checkin: any;
  has_swimming_pool?: number;
  hotel_name_trans: string;
  checkout: Checkout;
  badges: Badge[];
  cant_book: number;
  distance_to_cc: string;
  review_recommendation: string;
  id: string;
  deals: Deals;
  hotel_facilities: string;
  district: string;
  preferred_plus: number;
  latitude: number;
  distance: string;
  currencycode: string;
  timezone: string;
  soldout: number;
  native_ads_tracking: string;
  hotel_include_breakfast: number;
  main_photo_url: string;
  country_trans: string;
  is_genius_deal: number;
  class_is_estimated: number;
  districts: string;
  longitude: number;
  zip: string;
  address: string;
  price_is_final: number;
  is_no_prepayment_block: number;
  city_in_trans: string;
  address_trans: string;
  has_free_parking?: number;
  external_reviews?: ExternalReviews;
  booking_home?: BookingHome;
}

export interface PriceBreakdown {
  gross_price: string;
  has_incalculable_charges: number;
  has_fine_print_charges: number;
  has_tax_exceptions: number;
  all_inclusive_price: number;
  sum_excluded_raw: any;
  currency: string;
}

export interface MatchingUnitsConfiguration {
  matching_units_common_config: MatchingUnitsCommonConfig;
}

export interface MatchingUnitsCommonConfig {
  localized_area?: string;
  unit_type_id: number;
}

export interface Checkin {
  from: string;
  until: string;
}

export interface Bwallet {
  hotel_eligibility: number;
}

export interface Checkout {
  until: string;
  from: string;
}

export interface Badge {
  text: string;
  id: string;
  badge_variant: string;
}

export interface Deals {
  deals_available: DealsAvailable;
  deal_events_killswitch: number;
  deal_attributes: DealAttributes;
  deal_events?: DealEvent[];
}

export interface DealsAvailable {
  has_flash_deal?: number;
  has_preset?: number;
}

export interface DealAttributes {}

export interface DealEvent {
  localized_description: string;
  preset_id: any;
  code: number;
  text_color: string;
  bg_color: string;
  icon_name: string;
  icon_url: string;
  discount_percentage: number;
  description_translation_tag: string;
  name_translation_tag: string;
  disabled: number;
  localized_name: string;
}

export interface ExternalReviews {
  score_word: string;
  should_display: string;
  num_reviews: number;
  score: number;
}

export interface BookingHome {
  group: string;
  segment: number;
  is_single_unit_property: string;
  quality_class: number;
  is_booking_home: number;
}

export interface MapBoundingBox {
  ne_lat: number;
  ne_long: number;
  sw_long: number;
  sw_lat: number;
}

export interface Sorting {
  options: Option[];
  selected_identifier: string;
}

export interface Option {
  name: string;
  identifier: string;
  loading_message: string;
}

export interface Sort {
  name: string;
  id: string;
}

export interface RecommendedFilter {
  generic_id: string;
  name: string;
}
