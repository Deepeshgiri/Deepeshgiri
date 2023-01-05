public class AQ1 {
    //Write a program to read the value of n, and print all possible ways of
    // distributing n chocolates to 3 people.
    // (In other words, print all triples (x,y,z) such that x+y+z = n).

    public static void main(String args[]){
        int x,y,z;
        int n =8;
        for(int i=1;i<=n;i++){
            for(int j=1; j<=n;j++){
                for(int k =1;k<=n;k++){
                    if(i+j+k==n){
                        System.out.println(i+" "+j+" "+k);
                    }
                }
            }
        }
    }
}
