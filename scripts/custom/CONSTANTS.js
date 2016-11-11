/**
 * Created by harsh on 7/5/16.
 */

const DATA_SHEETNAME = "#import";
const METADATA_SHEET = "settings";
const TRACKER_PROGRAM_UID = "ProgramUID";
const TRACKER_TRACKED_ENTITY = "TrackedEntityUID";
const TRACKER_REGISTRATION_PLUS_ENROLLMENT = "TRACKER_REGISTRATION_PLUS_ENROLLMENT";

const FIRST_DELIMITER = "#";
const SECOND_DELIMITER = "@";
const THIRD_DELIMITER = ".";

const DOMAIN_TEI = "tei";
const DOMAIN_EVENT = "ev";
const DOMAIN_EVENT_DELETE = "evDelete";
const DOMAIN_ENROLLMENT = "en";
const DOMAIN_DATA_ELEMENT = "de";
const DOMAIN_TEI_DELETE = "teiDelete";
const DOMAIN_OU_UPDATE = "ouUpdate";
const DOMAIN_OU_DELETE = "ouDelete";
const DOMAIN_DVS = "dvs";
const DOMAIN_TEI_UPDATE = "teiUpdate";
const DOMAIN_USER = "user";

const DOMAINS = [DOMAIN_TEI,
                 DOMAIN_ENROLLMENT,
                  DOMAIN_EVENT,DOMAIN_DATA_ELEMENT,DOMAIN_EVENT_DELETE,DOMAIN_TEI_DELETE,DOMAIN_OU_UPDATE,
                    DOMAIN_OU_DELETE,DOMAIN_DVS,DOMAIN_TEI_UPDATE,DOMAIN_USER  ];

const FIELD_DATAELEMENT = "de";
const FIELD_ATTRIBUTE = "attr";
const FIELD_REGISTRATION_DATE = "registrationDate";
const FIELD_ORG_UNIT = "ou";
const FIELD_TRACKED_ENTITY = "te";
const FIELD_TRACKED_ENTITY_INSTANCE = "tei";
const FIELD_PROGRAM = "prg";
const FIELD_PROGRAM_STAGE = "ps";
const FIELD_EVENT_DATE="eventDate";
const FIELD_NAME = "name";
const FIELD_STORED_BY = "storedBy";
const FIELD_ENROLLMENT_DATE = "enrollmentDate";
const FIELD_UID_LOOKUP_BY_ATTR = "attrLookup";
const FIELD_UID_LOOKUP_BY_NAME = "nameLookup";
const FIELD_UID_LOOKUP_BY_CODE = "codeLookup";
const FIELD_UID = "uid";
const FIELD_COMPLETE = "complete";
const FIELD_CODE = "code";
const FIELD_LEVEL = "level";
const FIELD_PARENT = "parent";
const FIELD_PERIOD = "pe";
const FIELD_DVS_VALUE = "value";
const FIELD_CATEGORY_OPTION_COMBINATION = "coc";
const FIELD_DECOC = "decoc";

const FIELD_FIRST_NAME = "firstname";
const FIELD_SURNAME = "surname";
const FIELD_EMAIL = "email";
const FIELD_USERNAME = "username";
const FIELD_PASSWORD = "password";
const FIELD_USER_ROLE = "userRole";
const FIELD_USER_GROUP = "userGroup";


const FIELDS = [FIELD_DATAELEMENT,
                FIELD_ATTRIBUTE,FIELD_REGISTRATION_DATE,FIELD_ORG_UNIT,FIELD_TRACKED_ENTITY,FIELD_NAME,
    FIELD_PROGRAM,FIELD_ENROLLMENT_DATE,FIELD_EVENT_DATE,FIELD_STORED_BY,FIELD_TRACKED_ENTITY_INSTANCE,
    FIELD_PROGRAM_STAGE,FIELD_UID_LOOKUP_BY_ATTR,FIELD_UID,FIELD_COMPLETE,FIELD_UID_LOOKUP_BY_NAME,FIELD_CODE,
    FIELD_LEVEL,FIELD_PARENT,FIELD_PERIOD,FIELD_DVS_VALUE,FIELD_CATEGORY_OPTION_COMBINATION,FIELD_DECOC,
    FIELD_FIRST_NAME,FIELD_SURNAME,FIELD_EMAIL,FIELD_USERNAME,FIELD_PASSWORD,FIELD_USER_ROLE,FIELD_USER_GROUP,
    FIELD_UID_LOOKUP_BY_CODE
                ]


