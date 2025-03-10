import TrieMap "mo:base/TrieMap";
import Text "mo:base/Text";
import Iter "mo:base/Iter";
import _ "mo:base/Nat";
import _ "mo:base/Option";




actor {
    // Menggunakan Text.equal dan Text.hash untuk TrieMap
    var resumes = TrieMap.TrieMap<Text, Text>(Text.equal, Text.hash);

    // Variabel stabil untuk menyimpan data sebelum upgrade
    stable var stableResumes : [(Text, Text)] = [];

    // Simpan data ke stableResumes sebelum upgrade
    system func preupgrade() {
        stableResumes := Iter.toArray(resumes.entries());
    };

    // Ambil kembali data setelah upgrade menggunakan fromEntries
    system func postupgrade() {
        resumes := TrieMap.fromEntries(Iter.fromArray(stableResumes), Text.equal, Text.hash);
        stableResumes := [];
    };

    // Fungsi untuk menambahkan resume
    public func addResume(name: Text, data: Text) : async () {
        resumes.put(name, data);
    };

    // Fungsi untuk mengambil resume berdasarkan nama
    public query func getResume(name: Text) : async ?Text {
        return resumes.get(name);
    };
};
