function isAnagram(s: string, t: string): boolean {
    let hash:any={}
    for(let i=0;i<s.length;i++){
        if(hash[s[i]])hash[s[i]]=hash[s[i]]+1
        else hash[s[i]]=1
        if(hash[t[i]])hash[t[i]]=hash[t[i]]-1
        else hash[t[i]]=-1
    }
    const valuesArray: number[] = Object.values(hash);
    const sum: number = valuesArray.reduce((acc, curr) => acc + curr, 0);
    return !sum;
};
console.log(isAnagram("anagram","nagaram"))
