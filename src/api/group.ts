import { AxiosInstance } from "axios";

interface AddIndividualToGroupProps {
    srv: "add_individual_to_group";
    id: number;
    group_id: number;
    status: "add" | "invite" | "request";
}

interface AddIndividualToQueueProps {
    srv: "add_individual_to_queue";
    individual_id: number;
    queue_id: number;
    manager_id?: number;
    note?: string;
    suppress_email?: number;
}

interface CreateGroupProps {
    srv: "create_group";
    name: string;
    campus_id: number;
    main_leader_id: number;
    description?: string;
    group_type_id?: number;
    department_id?: number;
    area_id?: number;
    group_capacity?: number;
    meeting_location?: MeetingLocationProps;
    meeting_day_id?: number;
    meeting_time_id?: number;
    childcare_provided?: boolean;
    interaction_type?: string;
    membership_type?: string;
    listed?: boolean;
    public_search_listed?: boolean;
    udf_group_pulldown_1_id?: number;
    udf_group_pulldown_2_id?: number;
    udf_group_pulldown_3_id?: number;
}

interface GroupNeedsProps {
    srv: "group_needs";
    id: number;
}

interface GroupParticipants {}

interface MeetingLocationProps {
    street_address: string;
    city: string;
    state: string;
    zip: string;
}
