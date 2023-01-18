// Type for an generic object. 
export type DataType = { [key: string]: any };
//Sorting the countries into the alphabetical order
export const sortList = (list:DataType) => {
    list.sort((a:DataType, b:DataType) => (a.name.official > b.name.official) ? 1 : -1)
return list
}