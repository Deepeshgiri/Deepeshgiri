public class fib {
    public static void main(String args[]){
        int fib=0;
        int x=10;
        int t1=0,t2=1,t3=0;
        for (int i= 0; i<=x;i++){
            if (i==0||i==1){
                System.out.print(i+" ");

            }else{
                t3=t1+t2;
                System.out.print(t3+" ");
                t1=t2;
                t2=t3;

            }

        }
    }
}
