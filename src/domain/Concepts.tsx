// const Concepts = {
//   "1": "あなたの色でwebが完成する",
//   "2": "ホテル、飲食店等のブランディング経験とエンジニアとしての技術でビジネスを多面的から支援。",
//   "3": "優秀な技術者が集まり、結果や数字と真摯に向き合い、試行錯誤を重ねる。",
//   "4": "web領域における伴走型パートナー。",
//   "5": "ブランディングは、何があり、何を提供するか、潜在的なお客様とのお約束ごと。",
//   "6": "エンジニアリングは、webで表現し潜在的な顧客に届ける技術。",
//   "7": "ブランドにかける想いをテクニカルに表現するツール。",
//   "8": "事業にかける想いをwebに繋げます。",
// };

export type Concept = {
  firstSection: {
    id: string;
    description: string;
  };
  secondSection: {
    id: string;
    description: string;
  };
  thirdSection: {
    id: string;
    description: string;
  };
  fourthSection: {
    id: string;
    description: string;
  };
  fifthSection: {
    id: string;
    description: string;
  };
  sixthSection: {
    id: string;
    description: string;
  };
  seventhSection: {
    id: string;
    description: string;
  };
  eighthSection: {
    id: string;
    description: string;
  };
};

const Concepts = {
  firstSection: {
    id: "1",
    description: "あなたの色でwebが完成する",
  },
  secondSection: {
    id: "2",
    description:
      "ホテル、飲食店等のブランディング経験とエンジニアとしての技術でビジネスを多面的から支援。",
  },
  thirdSection: {
    id: "3",
    description:
      "優秀な技術者が集まり、結果や数字と真摯に向き合い、試行錯誤を重ねる。",
  },
  fourthSection: {
    id: "4",
    description: "web領域における伴走型パートナー。",
  },
  fifthSection: {
    id: "5",
    description:
      "ブランディングは、何があり、何を提供するか、潜在的なお客様とのお約束ごと。",
  },
  sixthSection: {
    id: "6",
    description: "エンジニアリングは、webで表現し潜在的な顧客に届ける技術。",
  },
  seventhSection: {
    id: "7",
    description: "ブランドにかける想いをテクニカルに表現するツール。",
  },
  eighthSection: {
    id: "8",
    description: "事業にかける想いをwebに繋げます。",
  },
};

export const useConcept = () => {
  return Concepts;
};
