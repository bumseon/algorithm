# ���� 

> 9���� ���� �ٸ� �ڿ����� �־��� ��, �̵� �� �ִ밪�� ã�� �� �ִ밪�� �� ��° �������� ���ϴ� ���α׷��� �ۼ��Ͻÿ�. 
���� ���, ���� �ٸ� 9���� �ڿ��� 3, 29, 38, 12, 57, 74, 40, 85, 61 �� �־�����, �̵� �� �ִ밪�� 85�̰�, 
�� ���� 8��° ���̴�.

-----------------------------------------------------------------------------------

<pre><code>
## Ǯ��

#include <stdio.h>

int main() {

  //Please Enter Your Code Here
  int number[9];
  int max, cnt;

  for(int i=0; i<9; i++){
    scanf("%d\n", &number[i]);
  }
  max = number[0];

  for(int i=1; i<9; i++){
    if(max < number[i]){
      max = number[i];
      cnt = i;
    }
  }
  printf("%d\n", max);
  printf("%d\n", cnt+1);
  
return 0;
}
</code></pre>