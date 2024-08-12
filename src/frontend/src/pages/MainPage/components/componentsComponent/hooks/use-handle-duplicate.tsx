import useAddFlow from "@/hooks/flows/use-add-flow";
import { useCallback } from "react";

const useDuplicateFlows = (
  selectedFlowsComponentsCards: string[],
  allFlows: any[],
  resetFilter: () => void,
  getFoldersApi: (
    refetch?: boolean,
    startupApplication?: boolean,
  ) => Promise<void>,
  folderId: string,
  myCollectionId: string,
  getFolderById: (id: string) => void,
  setSuccessData: (data: { title: string }) => void,
  setSelectedFlowsComponentsCards: (
    selectedFlowsComponentsCards: string[],
  ) => void,
  handleSelectAll: (select: boolean) => void,
  cardTypes: string,
) => {
  const addFlow = useAddFlow();
  const handleDuplicate = useCallback(() => {
    Promise.all(
      selectedFlowsComponentsCards.map((selectedFlow) =>
        addFlow({ flow: allFlows.find((flow) => flow.id === selectedFlow) }),
      ),
    ).then(() => {
      resetFilter();
      getFoldersApi(true);
      if (!folderId || folderId === myCollectionId) {
        getFolderById(folderId ? folderId : myCollectionId);
      }
      setSuccessData({ title: `${cardTypes} duplicated successfully` });
      setSelectedFlowsComponentsCards([]);
      handleSelectAll(false);
    });
  }, [
    selectedFlowsComponentsCards,
    addFlow,
    allFlows,
    resetFilter,
    getFoldersApi,
    folderId,
    myCollectionId,
    getFolderById,
    setSuccessData,
    setSelectedFlowsComponentsCards,
    handleSelectAll,
    cardTypes,
  ]);

  return { handleDuplicate };
};

export default useDuplicateFlows;
