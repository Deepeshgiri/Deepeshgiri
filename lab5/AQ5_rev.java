public class AQ5_rev {
    public static void print(int a[]){
        for (int i=0;i<a.length;i++){
            System.out.print(a[i]+" ");
        }
    }

    public static void main(String args[]){
        int a[]={23,43,54,29,455,22,63,3,52,2,20};

        for(int i=0;i<a.length;i++){
            for(int j=0;j<a.length-i-1;j++){
                if(a[j]<a[j+1]){
                    int temp = a[j];
                    a[j]=a[j+1];
                    a[j+1]=temp;
                }
            }
        }
        print(a);
    }
}
