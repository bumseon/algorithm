# maxvalue

> 9개의 서로 다른 자연수가 주어질 때, 이들 중 최대값을 찾고 그 최대값이 몇 번째 수인지를 구하는 프로그램을 작성하시오. 예를 들어, 서로 다른 9개의 자연수 3, 29, 38, 12, 57, 74, 40, 85, 61 이 주어지면, 이들 중 최대값은 85이고, 이 값은 8번째 수이다.

## 입력

> 첫째 줄부터 아홉 번째 줄까지 한 줄에 하나의 자연수가 주어진다. 주어지는 자연수는 100 보다 작다.

## 출력

> 첫째 줄에 최대값을 출력하고, 둘째 줄에 최대값이 몇 번째 수인지를 출력한다.


```c
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
```