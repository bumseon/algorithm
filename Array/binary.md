#����

> ���ڸ� �Է� �޾� �������� ����ϴ� ���α׷��� �ۼ��Ͻÿ�.

---------------------------------------------------------------------

<pre><code>
#include <stdio.h>

int main()
{
    int number;
    int binary[20] = { 0, };
    
    scanf("%d", &number);

    int position = 0;
    while (1)
    {
        binary[position]=number % 2;    // 2�� �������� �� �������� �迭�� ����
        number=number / 2;             // 2�� ���� ���� ����

        position++;    // �ڸ��� ����

        if (number == 0)    // ���� 0�� �Ǹ� �ݺ��� ����
            break;
    }

    // �迭�� ��Ҹ� �������� ���
    for (int i=position-1; i>=0; i--)
    {
        printf("%d", binary[i]);
    }

    printf("\n");

    return 0;
}
</code></pre>