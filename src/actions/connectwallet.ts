const connectWallet = async () => {
  const { ethereum } = window;

  const accounts = await ethereum.request({ method: "eth_requestAccounts" });
  
  return accounts[0]
};

export default connectWallet;
