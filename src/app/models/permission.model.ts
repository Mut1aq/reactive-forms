export interface Permissions {
  createDate?: string;
  id: number;
  pageDescAr: string;
  pageDescEn: string;
  pageFunctions: pageFunctions[];
}

export interface pageFunctions {
  createDate?: string;
  pageID: number;
  pageDescAr: string;
  pageDescEn: string;
  functionID: number;
  pageFuncDescAr: string;
  pageFuncDescEn: string;
}
