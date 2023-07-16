export interface CosmicJSProduct {
    version:      string;
    bucket:       Bucket;
    object_types: ObjectType[];
    objects:      Object[];
    media:        Media[];
    extensions:   any[];
}

export interface Bucket {
    slug:  string;
    title: string;
}

export interface Media {
    name:          string;
    original_name: string;
    size:          number;
    type:          string;
    created_at:    Date;
    created_by:    string;
}

export interface ObjectType {
    title:           string;
    slug:            string;
    singular:        string;
    metafields:      ObjectTypeMetafield[];
    options:         Options;
    emoji:           string;
    created_at:      Date;
    modified_at:     Date;
    localization:    boolean;
    locales:         any[];
    priority_locale: string;
    folder:          string;
    singleton:       boolean;
    order:           number;
}

export interface ObjectTypeMetafield {
    id:                     string;
    title:                  string;
    key:                    string;
    type:                   Type;
    value?:                 string;
    helptext:               string;
    required:               boolean;
    media_validation_type?: string;
    options?:               Option[];
    children?:              any[];
    repeater_fields?:       RepeaterField[];
}

export interface Option {
    key:   string;
    value: string;
}

export interface RepeaterField {
    id:                    string;
    title:                 string;
    key:                   string;
    type:                  Type;
    value:                 string;
    helptext:              string;
    required:              boolean;
    isExpanded:            boolean;
    media_validation_type: string;
}

export enum Type {
    File = "file",
    Number = "number",
    Repeater = "repeater",
    SelectDropdown = "select-dropdown",
    Text = "text",
}

export interface Options {
    slug_field:     boolean;
    content_editor: boolean;
}

export interface Object {
    _id:                string;
    slug:               string;
    title:              string;
    content:            string;
    metafields:         ObjectMetafield[];
    type_slug:          string;
    created_at:         Date;
    modified_at:        Date;
    status:             string;
    thumbnail:          string;
    order:              number;
    object_type_rev_id: string;
    publish_at:         null;
    published_at:       Date;
}

export interface ObjectMetafield {
    id:        string;
    key:       string;
    value?:    number | string;
    type:      Type;
    children?: Array<Child[]>;
}

export interface Child {
    id:    string;
    key:   string;
    value: string;
    type:  Type;
}
