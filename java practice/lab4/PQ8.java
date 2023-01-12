public class PQ8 {
    //⦁	Write an user defined function to computer the remainder
    // when x divides y, without using % operator.
    public static int rem(int a,int b){
        while(a>b){
            a=a-b;
        }
        return a;
    }
    public static void main(String args[]){
        int x,y;
        x=10;
        y=4;
        System.out.println(rem(x,y));
    }
}
