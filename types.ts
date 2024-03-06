interface IMealCommonProps {
  id: string;
  slug: string;
  title: string;
  summary: string;
  instructions: string;
  creator: string;
  creator_email: string;
}

export interface IMeal extends IMealCommonProps {
  image: string;
}

export interface IMealForm extends IMealCommonProps {
  image: File;
}
