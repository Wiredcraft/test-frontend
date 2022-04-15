import { stringify } from '../../utils/index';


export interface FetchImagePayload {
    offset: number;
    limit: number;
    keywords: string;
}



export const fetchImageData = (payload: FetchImagePayload) =>
    fetch(`/api/data?${stringify(payload as any)}`);

