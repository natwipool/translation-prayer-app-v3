export default (transPrayers, lists) => {
  return lists.map((list) =>
    transPrayers.find((transPrayer) =>
      transPrayer.precept === list
    )
  )
};