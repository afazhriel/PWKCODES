export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'addResume': IDL.Func([IDL.Text, IDL.Text], [], []),
    'getResume': IDL.Func([IDL.Text], [IDL.Opt(IDL.Text)], ['query']),
  });
};

export const canisterId = "bd3sg-teaaa-aaaaa-qaaba-cai";  // ID canister backend
  