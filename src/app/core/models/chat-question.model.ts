export interface ChatAction {

    label: string;

    icon: string;

    route?: string;

    question?: ChatQuestion;

}

export interface ChatQuestion{

    id:number;

    question:string;

    keywords:string[];

    answer:string;

    actions?:ChatAction[];

}
