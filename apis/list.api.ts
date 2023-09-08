
const categoryApi=generateCRUD('category')
const itemApi=generateCRUD('item')
const tableApi=generateCRUD('table')
export {
  categoryApi,
  itemApi,
  tableApi
};
export function generateCRUD<T extends string, AdditionalProps>(
  resourceName: T,
  additionalProps: AdditionalProps = {} as AdditionalProps
): typeof apiEndpoints {
  const apiEndpoints = {
    post: `/${resourceName}`,
    get: `/${resourceName}`,
    delete: `/${resourceName}`,
    patch: `/${resourceName}`,
    ...additionalProps,
  };

  return apiEndpoints;
}