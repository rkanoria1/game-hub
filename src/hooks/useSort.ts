import useData from "./useData";

export interface  Sort {
    value: string;
    label: string;
}

const useSort =  () => useData<Sort>('/platforms/lists/parents');

export default useSort;

